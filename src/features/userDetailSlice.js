import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Create Action --> Async thunk
export const createUser = createAsyncThunk(
    'createUser', async (data, thunkAPI) => {
        const response = await fetch(
            'https://66e3d64fd2405277ed11fe42.mockapi.io/crud',
            {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }
        );

        try {
            const result = await response.json();
            // console.log(result);
            return result;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

// Update Action --> Async thunk
export const updateUser = createAsyncThunk(
    'updateUser', async (data, thunkAPI) => {
        const response = await fetch(
            `https://66e3d64fd2405277ed11fe42.mockapi.io/crud/${data.id}`,
            {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }
        );

        try {
            const result = await response.json();
            // console.log(result);
            return result;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

// Delete Action --> Async thunk
export const deleteUser = createAsyncThunk(
    'deleteUser', async (id, thunkAPI) => {
        const response = await fetch(`https://66e3d64fd2405277ed11fe42.mockapi.io/crud/${id}`, {
            method: 'DELETE'
        });


        try {
            const result = await response.json();
            // console.log(result);
            return result;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

// Read Action --> Async thunk
export const fetchUsers = createAsyncThunk('fetchUsers', async (thunkAPI) => {
    const response = await fetch('https://66e3d64fd2405277ed11fe42.mockapi.io/crud');
    try {
        const result = response.json();
        return result;
    } catch (error) {
        return thunkAPI.rejectWithvalue(error);
    }
})


// Slice
export const userDetail = createSlice({
    name: 'userDetail',
    initialState: {
        users: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createUser.fulfilled, (state /*action*/) => {
                state.loading = false;
                state.error = null;
                // state.users.push(action.payload); // This line isn't needed
            })
            .addCase(createUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(deleteUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.loading = false;
                state.users = state.users.filter(user => user.id !== action.payload.id);
            })
            .addCase(deleteUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(updateUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateUser.fulfilled, (state, /*action*/) => {
                state.loading = false;
                state.error = null;
            })
            .addCase(updateUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

    }
});

export default userDetail.reducer;