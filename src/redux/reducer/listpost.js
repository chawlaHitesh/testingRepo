import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit"
import axios from "../../axiosinterceptor"

const fetchUserById = createAsyncThunk(
    'users/fetchById',
    // Declare the type your function argument here:
    async (userId,{rejectWithValue,...rest}) => {
        console.log(rest)
        try {
          const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
          // Inferred return type: Promise<MyData>
        //   const a=await response.json()
        //   if (Object.keys(a).length<1) {
        //     throw new Error("THIS IS ERROR")
        //   }
         return response.data 
        } catch (error) {
            console.log({hitesh:rejectWithValue(error.message),error})
          return  rejectWithValue(error.message)
        }
    },
  )

  const slice = createSlice({
    name: 'test',
    initialState: {isLoading:false,userDetail:null},
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchUserById.pending,(state,action)=>{
           
           state.isLoading=true
        //    return {...state,isLoading:true}
        })
        .addCase(fetchUserById.fulfilled,(state,action)=>{
           
            state.isLoading=false
            state.userDetail=action.payload
            console.log((action),"state")
            // return {...state,isLoading:false,userDetail:action.payload}
        })
        .addCase(fetchUserById.rejected,(state,action)=>{
           console.log(action,"LLLLLLLLLLLLLLLLLLLLLLLLL")
            state.isLoading=false
            state.userDetail=null
            // return {...state,isLoading:false,userDetail:null,error:action.payload}
        })




        
    }
    
  })
  // 

  export default slice.reducer
  export {fetchUserById}

