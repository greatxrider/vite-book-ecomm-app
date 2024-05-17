import { createAppSlice } from "../../app/createAppSlice";

export interface BlogApiSliceState {
    countValue: number
}

const initialState: BlogApiSliceState = {
    countValue: 1,
}

export const blogSlice = createAppSlice({
    name: "viewMore",
    initialState,
    reducers: create => ({
        viewMore: create.reducer(state => {
            state.countValue += 4
        }),
    }),
    selectors: {
        selectValue: viewMore => viewMore.countValue,
    },
})

export const selectCount = (state: { viewMore: { countValue: number; }; }) => state.viewMore.countValue

export const { viewMore } = blogSlice.actions

export const { selectValue } = blogSlice.selectors
