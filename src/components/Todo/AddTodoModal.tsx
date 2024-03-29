
import { FormEvent, useState } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";
import { useAddTodoMutation } from "@/redux/Api/APISlice";




const AddTodoModal = () => {

       
  const [addTodo,{data,isLoading,isSuccess,isError}]=useAddTodoMutation()

    const [task,setTask]=useState("");
    const [discription,setDiscription]=useState("");
    const [priority,setPriority]=useState("");


   

    const onSubmit=(e:FormEvent)=>{
        e.preventDefault();
        
       // dispatch(AddTodo({id:Math.random().toString(36).substring(2,10),title:task,discription:discription,priority,isCompleted:false}))
       addTodo({title:task,discription:discription,priority,isCompleted:false})

    }
    console.log({isSuccess,isLoading,isError,data});
    return (
        <Dialog>
      <DialogTrigger asChild>
      <Button className="bg-primary-gradint text-xl font-serif"> Add Todod</Button>
      </DialogTrigger>
      
      <DialogContent  className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Task</DialogTitle>
          <DialogDescription>
            Add Your Task That you want to finish
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit}>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
             Task
            </Label>
            <Input onBlur={(e)=>setTask(e.target.value)} id="task"  className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="discription" className="text-right">
              Descriptions
            </Label>
            <Input onBlur={(e)=>setDiscription(e.target.value)} id="discription" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="discription" className="text-right">
             Priority
            </Label>
            <Select onValueChange={(value)=>setPriority(value)}>
      <SelectTrigger className="col-span-3">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Priority</SelectLabel>
          <SelectItem value="High">High</SelectItem>
          <SelectItem value="Medium">Medium</SelectItem>
          <SelectItem value="Low">Low</SelectItem>
          
        </SelectGroup>
      </SelectContent>
    </Select>
           
          </div>

        </div>
        <DialogFooter>
            <DialogClose asChild>
            <Button type="submit">Save changes</Button>
            </DialogClose>
         
        </DialogFooter>

        </form>
      </DialogContent>
    </Dialog>
    );
};

export default AddTodoModal;