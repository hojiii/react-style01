import React, { useState } from 'react'
import './App.css'
import Button from './component/Button'
import User from './component/User'

const App = () => {

  const [users, setUsers] = useState([
    { id: 1, age: 30, name: "송중기" },
    { id: 2, age: 24, name: "송강" },
    { id: 3, age: 21, name: "김유정" },
    { id: 4, age: 29, name: "구교환" },
  ]);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const nameChangeHandler = (event) => {
    setName(event.target.value)
  }

  const ageChangeHandler = (event) => {
    setAge(event.target.value)
  }
  //추가버튼 클릭
  const clickAddButtonHandler = () => {
    //1.새로운 형태의 객체를 만든다
    //2. 배열에 더한다
    const newUser = {
      id: users.length + 1,
      age,
      name,
    }
    setUsers([...users, newUser]);
  }
  //삭제버튼 클릭
  const clickDeletebuttonHandler = (id) => {
    const newUsers = users.filter((user) => user.id !== id);
    //클릭된 아이디 값의 정보가 받아온 정보랑 같지않은것만 필터링
    setUsers(newUsers);

  }



  return (
    <div>
      <div>
        이름 : <input
          value={name}
          onChange={(event) => nameChangeHandler(event)/*함수 안에 인자를 써야되는경우는 앞에 함수로 감싸야됨*/} /><br />

        나이 : <input
          value={age}
          onChange={ageChangeHandler} />
        <br />
        <Button clickAddButtonHandler={clickAddButtonHandler}>추가</Button>
      </div>
      <div className='app-style'>
        {users.map(function (item) {
          return <User key = {item.id}item = {item} removeFuntion = {clickDeletebuttonHandler}/>
        })
        }
      </div>
    </div>
  );
};


  // const arr = ["감자", "고구마", "오이", "가지", "옥수수"];

 
  //return 

    //<div className="app-style">

      {/* {arr.map(function(i) {
        return <div className="component-style">{i}</div>
        
      })} */}

      {/* {
        arr.map((i) => {
          return <div className="component-style">{i}</div>
        
        })//화살표함수로
      } */}

      {//필터로 오이 아닌것만 fitter로 츌력
        // arr.filter(function(item){
        //   return item !== "오이";
        // }).map(function(item){
        //   return <div className="component-style">{item}</div>
          //fitter 메소드를 통해서만들어진 배열을 map으로 가져오기
        //})
        }
      


      {/* <div className="component-style">감자</div>
      <div className="component-style">고구마</div>
      <div className="component-style">오이</div>
      <div className="component-style">가지</div>
      <div className="component-style">옥수수</div> */}
    //</div>
//}

export default App
