import { useEffect, useState } from 'react';

const TeachersData = () => {
    

    const [ teachers, setteachers ] = useState([]);

    useEffect(() => {
        fetch('./teacherDb.json')
            .then(res => res.json())
            .then(data => setteachers(data))
    } , []);
    return [teachers,setteachers];

}

export default TeachersData;