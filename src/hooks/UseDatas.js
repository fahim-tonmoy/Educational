import { useEffect, useState } from 'react';

const UseDatas = () => {
    

    const [ datas, setData ] = useState([]);
    const [ teachers, setteachers ] = useState([]);

    useEffect( () => {
        fetch('./db.json')
            .then(res => res.json())
            .then(data => setData(data))

        fetch('./teacherDb.json')
            .then(res => res.json())
            .then(data => setteachers(data))
    } , []);
    return [datas,setData,teachers,setteachers];

}

export default UseDatas;