//// 1. Basic function component
// export default functional CourseCard() {
//     return <div>Hello, Basic function component</div>
// }

//// 2. Arrow Function Style
// const CourseCard = () => {
//     return <div>Hello, CourseCard written in Arrow Function style</div>
// }

// export default CourseCard;

// // 3. Implicit return
// const CourseCard = () => <div>Hello, CourseCard Implicit Return</div>

// export default CourseCard;

// // 4. Arrow Function style with Props
// const CourseCard = (props) => {
//     return <div>Hello, {props.name}!</div>;
// }

// export default CourseCard;

// // 5. Arrow function with Props using destructuring
// const CourseCard = ({ name }) => {
//     return <div>Hello, {name}!</div>
// }

// export default CourseCard;

// // 6. Basic CourseCard
// // Building a simple CourseCard component
// // that takes title, description, and duration
// // JSX expressions curly bracket {blahBlah}
// // JSX must return one parent element
// // You can embed JavaScript logic in JSX using {}
// // Use tenary operator for conditional rendering
// // Use className not class, not classname !!!
// // properly use different types of data from props

// const CourseCard = ({ title, description, duration, isFree, teachers }) => {
//     return (
//         <div className="course-card">
//             <h2>{title}</h2>
//             <p>{description}</p>
//             <p>Duration: {duration}</p>
//             <p>{isFree ? "This course is Free!" : "Paid course"}</p>
//             <p>Teachers: {teachers}</p>
//         </div>
//     );
// };

// export default CourseCard;

// const CourseCard = ({ course }) => {
//     return (
//         <div>
//             <h2>{course.title}</h2>
//             <p>{course.description}</p>
//             <p>Duration: {course.duration}</p>
//             <p>{course.isFree ? "This course is Free!" : "Paid course"}</p>
//             <h3>Teachers:</h3>
//             <ul>
//                 {course.teachers.map((teacher) => (
//                     <li key={teacher}>{teacher}</li>
//                 ))}
//             </ul>
//         </div>
//     )
// }

// export default CourseCard;

const CourseCard = ({ course }) => {
    // Using destructing
    const { title, description, duration, isFree, teachers } = course;

    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>Duration: {duration}</p>
            <p>{isFree ? "This course is Free!" : "Paid course"}</p>
            <h3>Teachers:</h3>
            <ul>
                {teachers.map((teacher) => (
                    <li key={teacher}>{teacher}</li>
                ))}
            </ul>
        </div>
    )
}

export default CourseCard;
