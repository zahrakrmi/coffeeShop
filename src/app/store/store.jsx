
import { create } from 'zustand'

const useStore = create((set) => ({
    data: [],
    updateBasket: (addPro) => {
        let alertType=null;

        set((state) => {
            const x = state.data.find((val) => val.id === addPro.id)
            if (x) {
                alertType='error'
                return state;
    
            } else {
                alertType='success'
                return { data: [...state.data, addPro] };
            }
        });
        return alertType;
    } ,
    

    myPlus: (i) => set((state) => {
        const x = state.data.findIndex((val) => val.id === i)
        if (x !== -1) {
            state.data[x].count += 1;
            return { data: [...state.data] };
        }
    }),

    myMinus: (i) => set((state) => {
        const x = state.data.findIndex((val) => val.id === i)
        if (x !== -1) {

            if(state.data[x].count>0){
                state.data[x].count -= 1;
                return { data: [...state.data] };
            }else{

                
                return {data: state.data.filter((item) => item.id !== i)}
            }

        }
    })



}))
export default useStore