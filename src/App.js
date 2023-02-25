import React from 'react'
import './App.css'

const App= () => {

  const arr = ["감자", "고구마", "오이", "가지", "옥수수"];

 
  return (
    <div className="app-style">

      {/* {arr.map(function(i) {
        return <div className="component-style">{i}</div>
        
      })} */}

      {/* {
        arr.map((i) => {
          return <div className="component-style">{i}</div>
        
        })//화살표함수로
      } */}

      {//필터로 오이 아닌것만 fitter로 츌력
        arr.filter(function(item){
          return item !== "오이";
        }).map(function(item){
          return <div className="component-style">{item}</div>
          //fitter 메소드를 통해서만들어진 배열을 map으로 가져오기
        })
      }


      {/* <div className="component-style">감자</div>
      <div className="component-style">고구마</div>
      <div className="component-style">오이</div>
      <div className="component-style">가지</div>
      <div className="component-style">옥수수</div> */}
    </div>
  )
}

export default App
