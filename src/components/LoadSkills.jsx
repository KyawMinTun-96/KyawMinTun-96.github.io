export const PArray = [
    {
        'HTML5': 'html.png',
        'CSS3': 'css.png',
        'JavaScript': 'javascript.png',
        'Type Script': 'typescript.png',
        'jQuery': 'jquery.png',
        'Bootstrap': 'bootstrap.png',
        'React': 'react.png',
        'Redux': 'redux.png',
        'React Native': 'react.png',
        'Vue': 'vue.png',
        'PHP': 'php.png',
        'MySQL': 'mysql.png',
        'MSSQLSERVER': 'mssqlserver.png',
        'Photoshop': 'photoshop.png',
        'Git': 'git.png',
        'GitLab': 'gitlab.png',
        'GitHub': 'github.png',
        'PowerApp': 'powerapp.png',
        'Power Automate': 'powerautomate.png',
        'M365': 'm365.png',
        'Sharepoint': 'sharepoint.png',
        'AWS': 'aws.png',
        'Azure DevOps': 'azure.png',
        'C#': 'c#.png',
        'Python': 'python.png',
        'Laravel': 'laravel.png'

    }
];


export const loadSkills = (pName) => {
    return(
        pName.length > 0 && Object.entries(pName[0]).map(([skill, icon]) => (
            <li key={skill} className='img-hover-effect'>
                <img src={require(`../assets/imgs/programming/${icon}`)} width={20} height={20} alt={skill}/>
                <span>{skill}</span>
            </li>
        ))
    )
}

export const loadSkillsPrj = (data) => {
    return Object.entries(PArray[0]).map(([key, icon]) => (
        data.toLowerCase() === key.toLowerCase() ? (
            <img src={require(`../assets/imgs/programming/${icon}`)} width={20} height={20} alt={key} key={key} />
        ) : null
    ));
}
