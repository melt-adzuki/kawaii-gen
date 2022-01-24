import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import qs from "qs"

const params = qs.parse(window.location.search, { ignoreQueryPrefix: true })

export interface ConfigState {
    friendlyName: string
    forceNegative: boolean
}

const initialState: ConfigState = {
	friendlyName: params.friendlyName?.toString() || "",
	forceNegative: params.forceNegative?.toString() === "true" || false,
}

export const configSlice = createSlice({
	name: "config",
	initialState,
	reducers: {
		configuration(state, action: PayloadAction<ConfigState>)
		{
			state.friendlyName = action.payload.friendlyName
			state.forceNegative = action.payload.forceNegative
		},
	},
})

// Action creators are generated for each case reducer function
export const { configuration } = configSlice.actions

export default configSlice.reducer
