import { useState, useEffect } from "react";
import { getBinData, updateBinData} from '../api_service';
const BIN_ID = '66bcbfcae41b4d34e4205219';

function VisitorCount() {

    const [totalCount, setVisitorCount] = useState(0);

    useEffect(() => {
        const userVisited = localStorage.getItem('userVisited');

        const fetchData = async () => {

            try {

                const result = await getBinData(BIN_ID);
                const initialCount = parseInt(result.record.visitorCount, 10) || 0;
                setVisitorCount(initialCount);

                if(!userVisited) {
                    localStorage.setItem('userVisited', true);
                    const updatedCount = initialCount + 1;
                    setVisitorCount(updatedCount);

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

    }, []);



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