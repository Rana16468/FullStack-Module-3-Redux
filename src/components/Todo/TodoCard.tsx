import { useAppDispatch } from "@/redux/hook";
import { Button } from "../ui/button";
import { isCompletedToggle, removeTodos } from "@/redux/features/TodoSlice";
import UpdateTodoModal from "./UpdateTodoModal";



type TTodoProps={
    id:string;
    title:string;
    discription:string;
    priority:string;
    isCompleted:boolean
    
}
const TodoCard = ({ ...list}:TTodoProps) => {

   

    const dispatch=useAppDispatch();
   

    const handelToggleState=()=>{

        dispatch(isCompletedToggle(list.id));

       
    }

   
    return (
        <>
          
          <div className="bg-white rounded flex justify-between items-center p-3">
    <input className="mr-3" onChange={handelToggleState} disabled={list?.isCompleted} type="checkbox" name="completed" id="completed" />
    <p className="font-semibold flex-1">{list.title}</p>
    {list?.isCompleted? <p className="text-green-500 text-xl font-serif flex-1">Done</p>:<p className="text-red-500 text-xl font-serif flex-1">Pending</p>}
    <p className="font-semibold flex-1">{list?.priority}</p>
    <p  className="flex-[2]">{list.discription}</p>
    <div className="space-x-5">
    <Button onClick={()=>dispatch(removeTodos(list.id))} className="bg-primary-gradint  text-sm font-serif"> 
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
</svg>
</Button>
    <UpdateTodoModal id={list.id}/>
    </div>
</div>
        </>
    );
};

export default TodoCard;