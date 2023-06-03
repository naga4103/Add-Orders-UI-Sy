import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {

  orderDD:"",
  onShow:false,
  values:{
    date: "",
    d1: "",
    d2: "",
    d3: "",
    d4: "",
  },
  searchValue:""


  
};

export const adminSignUp = createAsyncThunk(
  "/viewTickets",
  async (thunkApi:any) => {
    try {
     
    } catch (error) {
      
    }
  }
);

export const counterSlice = createSlice({
  name: "design",
  initialState,
  reducers: {
 setOrderDD: (state, value:any) => {
      //   state.value -= 1;
      state.orderDD = value;
    },
    setOnShow: (state, value:any) => {
      //   state.value -= 1;
      state.onShow= value;
    },
    setValues: (state, value:any) => {
      //   state.value -= 1;
      state.values = {...state.values,...value.payload};
    },
    setSearchValue:(state,value:any)=>{

      state.searchValue=value;
    }


  },
});

// Action creators are generated for each case reducer function
export const {setOrderDD,setOnShow,setValues  } = counterSlice.actions;


export default counterSlice.reducer;
