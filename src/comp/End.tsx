import React from 'react'
interface props{
    numQue: number;
    lenQues: number;
    grade: number;
}
function End(props: props) {
  return (
    <div>
      <div>
                {props.numQue == props.lenQues && (
                    <div>
                        <h3>end! your grade is {props.grade}</h3>
                    </div>
                )}
            </div>
    </div>
  )
}

export default End

