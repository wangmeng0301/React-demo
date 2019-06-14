import React, {Component, Fragment} from "react";
import TodoItem from "./TodoItem";
import "./style.css";
import Test from "./test"


class TodoList extends Component {
    //最优先执行的函数  
    constructor(props){
        //调用父类的构造函数
        super(props);
        this.state = {
            inputValue : "",
            list : [],
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
        this.handleItemDelete = this.handleItemDelete.bind(this)

    }

    render(){
        return (
            <Fragment> {
                //不会在页面上渲染出来标签
            }
                <div>
                    <label htmlFor="inserArea">输入内容</label>
                    <input 
                        id="inserArea"
                        className='input'
                        value={this.state.inputValue} 
                        onChange={this.handleInputChange}    
                    />
                    <button onClick={this.handleBtnClick}>提交</button>
                </div>
                <ul>
                    {this.getTodoItem()}
                </ul>
                <Test content={this.state.inputValue}/>
            </Fragment> 
        )
    }

    getTodoItem(){
       return  this.state.list.map((item , index) => {
            return (
                <TodoItem 
                key={index}
                content={item} 
                index={index} 
                deleteItem={this.handleItemDelete}
                />

            )
        })
    }

    handleInputChange(e){
        const value = e.target.value
        this.setState(() => ({
            inputValue:value
        }));
   
    }
    handleBtnClick(){
        this.setState((prevState)=>({
            list : [...prevState.list, prevState.inputValue],
            inputValue: ''
        }));
       
    }
    handleItemDelete(index){
        //immuteable 
        //state 不允许做任何的改变 
        this.setState((prevState) => {
       //先拷贝出来一个副本，修改副本然后荣国setState修改state
            const list = [...prevState.list]
            list.splice(index, 1);
            return {
             list
            }
        });
       

        console.log(index)
    }

}

export default TodoList;