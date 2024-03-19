import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {

    const subjectMarksData = [
        { id: 1, name: "Student 1", math: 85, physics: 78, chemistry: 90 },
        { id: 2, name: "Student 2", math: 78, physics: 75, chemistry: 85 },
        { id: 3, name: "Student 3", math: 92, physics: 88, chemistry: 92 },
        { id: 4, name: "Student 4", math: 65, physics: 70, chemistry: 75 },
        { id: 5, name: "Student 5", math: 80, physics: 82, chemistry: 78 },
        { id: 6, name: "Student 6", math: 88, physics: 85, chemistry: 90 },
        { id: 7, name: "Student 7", math: 75, physics: 72, chemistry: 80 },
        { id: 8, name: "Student 8", math: 90, physics: 92, chemistry: 88 },
        { id: 9, name: "Student 9", math: 82, physics: 80, chemistry: 85 },
        { id: 10, name: "Student 10", math: 95, physics: 95, chemistry: 90 }
    ];

    return (
        <div>
            <LChart width={800} height={400} data={subjectMarksData}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math" stroke='red'></Line>
                <Line dataKey={"physics"} stroke='green'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;