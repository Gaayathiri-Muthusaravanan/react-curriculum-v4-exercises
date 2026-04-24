//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  //add variables here
  const name = 'Gaayathiri';
  const age = 35;
  const hobbies = ['Coding', 'Gardening', 'Music'];
  return (
    <div>
      <h1>About me</h1>
      <p>
        I'm {name} and I'm {age} year's old. I'm based in Atlanta, Georgia. I'm
        a computer science graduate with a passion for building things with
        code.I enjoy creating clean, functional websites and applications. My
        hobbies are,
      </p>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}
