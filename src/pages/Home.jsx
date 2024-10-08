import Profile from "../assets/img/passport-size-photo.jpg"
const Home = () =>{
    return(
      <div className=" h-screen flex flex-col justify-between items-center ">
        <div className="w-full h-full flex flex-row justify-around items-center ">
          <div className="flex flex-col text-white gap-10">
            <div className="text-6xl">
              Paulson M S
            </div>
            <div className="text-lg">
              Committed software developer proficient in Java and SQL, supplemented by some exposure to Python,<br></br>
              HTML and CSS languages.Experienced in designing and implementing scalable solutions for projects. <br></br>
              Strong problem-solving abilities coupled with effective communication skills. <br></br>
              Committed to continuous learning and staying updated with emerging technologies.
            </div>
            <div className="h-20 items-center flex justify-around">
              <button className="flex"><i className="fa-brands fa-java text-5xl hover:text-7xl text-red-700 transition-all"></i></button>
              <button className="flex"><i className="fa-brands fa-react text-5xl hover:text-7xl text-blue-400 transition-all"></i></button>
              <button className="flex"><i className="fa-brands fa-github text-5xl hover:text-7xl transition-all"></i></button>
              <button className="flex"><i className="fa-brands fa-js text-5xl hover:text-7xl text-yellow-300 transition-all"></i></button>
              <button className="flex"><i className="fa-solid fa-database text-5xl hover:text-7xl text-orange-500 transition-all"></i></button>
            </div>
          </div>
          <div className="h-[40vh] w-[20vw] flex flex-col justify-center">
             <img className="rounded-[50%]" src={Profile}/>
           </div>
        </div>
      </div>
    )
}
export default Home