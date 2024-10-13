import logo from './logo.svg';
import './App.css';
import CourseCard from './components/CourseCard';

function App() {

  const courseObj = {
    title: 'React Basics',
    description: 'This is a Jiangren React Basics Course as part of .NET fullstack semester',
    duration: 3,
    isFree: true,
    teachers: ['Justin A', 'Justin B', 'Justin C']
  };

  return (
    <div className="App">
      {/* <CourseCard /> */}
      {/* <CourseCard name='John' /> */}
      {/* Use self-closing tag <CourseCard /> not <CourseCard > */}
      {/* <CourseCard 
        title='React Basics' 
        description='This is a Jiangren React Basics Course as part of .NET fullstack semester' 
        duration={3} 
        isFree={true}></CourseCard> */}
      {/* <CourseCard 
        title='React Basics' 
        description='This is a Jiangren React Basics Course as part of .NET fullstack semester' 
        duration={3} 
        isFree={true} /> */}
      <CourseCard course={courseObj} />
    </div>
  );
}

export default App;
