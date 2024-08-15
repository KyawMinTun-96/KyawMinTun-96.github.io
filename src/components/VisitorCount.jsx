import { useState, useEffect } from "react";
import { getBinData, updateBinData} from '../api_service';
const BIN_ID = '66bcbfcae41b4d34e4205219';


function VisitorCount() {

    const [totalCount, setVisitorCount] = useState(0);
    const [dataSent, setDataSent] = useState(false);

    useEffect(() => {
        let isMounted = true;  
        const userVisited = localStorage.getItem('userVisited');

        const fetchData = async () => {
            try {

                const result = await getBinData(BIN_ID);
                const initialCount = parseInt(result.record.visitorCount, 10) || 0;

                if(isMounted) {
                    setVisitorCount(initialCount);
                }


                if(!userVisited) {
                    localStorage.setItem('userVisited', true);
                    const updatedCount = initialCount + 1;
                    
                    if(isMounted) {
                        setVisitorCount(updatedCount);
                    }

                    const fetchLocation = async () => {
                        try {
                            const response = await fetch (
                                `https://api.ipstack.com/172.68.4.225?access_key=1dbcbfc222bb09d0c7381352ef24d547&format=1`);
                            const data = await response.json();
       
                            const browserInfo = {
                                userAgent: navigator.userAgent,
                                platform: navigator.platform,
                                language: navigator.language,
                                memoery: navigator.deviceMemory || 'Unknown'
                            };
                        
                            const screenInfo = {
                                width: window.screen.width,
                                height: window.screen.height,
                            };
            
                            const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection || {};
                            const networkInfo = {
                                downlink: connection.downlink || 'Unknown',
                                effectiveType: connection.effectiveType || 'Unknown'
                            }
            
                            const TimezoneInfo = {
                                timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
                            }
    
                            const clientInfo = {...data, ...browserInfo, ...screenInfo, ...networkInfo, ...TimezoneInfo};

                            if (isMounted && !dataSent) {
                                await sendData(clientInfo);
                                setDataSent(true); // Set flag to true after sending data
                            }
    
                        } catch (err) {
    
                        console.log(err.message);
                        
                        }
                    };
    
    
                    const sendData = async (data) => {
                        try {
                            const endpoint = 'https://prod2-59.southeastasia.logic.azure.com:443/workflows/42ef4487b5ae41a29170530ddb701d60/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=IQyAHtZqWqNMXhjLTsiOps8HHwhzOv3iwWhgOAoaGV0';
    
                            await fetch(endpoint, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify(data),
                            });
                        } catch (error) {
                            console.error('Error sending data:', error.message);
                        }
                    };

                    await fetchLocation();

                    try {
                     
                        const updatedData = { ...result.record.visitorCount, visitorCount: updatedCount };
                        await updateBinData(BIN_ID, updatedData);

                    } catch (error) {

                        console.error('Error updating data', error);

                    }
                }

            } catch (error) {

              console.error('Error fetching data', error);

            }
        };

        fetchData();
        return () => {
            isMounted = false; // Cleanup function to prevent memory leaks
        };
    }, [dataSent]);




  
      
 
  





    return(
        <section id="count">
            <h2  className="sec-title">Visitor Count</h2>
            <div className="visitor-counter-container">
                <div className="visitor-counter">
                    <h1 className="visitor-count">{totalCount} {totalCount > 0 ? <span className="plus">+</span> : ''}</h1>
                    <p className="visitor-text">Total Visitors</p>
                </div>
            </div>
        </section>

        
    )
}

export default VisitorCount;