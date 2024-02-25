import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = "http://localhost:1337/api/projects"

export const getPropertyDetails = createAsyncThunk(
  'property/fetchPropertyDetails',
  async (data) => {
    return axios.get(url).then().catch()
  }
)

export const getPropertiesDetails = createAsyncThunk(
  'property/fetchPropertiesDetails',
  async (data) => {
    return axios.get(url).then().catch()
  }
)

export const postPropertyDeatils = createAsyncThunk(
  'property/postPropertyDeatils',
  async (data) => {
    return axios.post(url, data).then().catch()
  }
);

export const updatePropertyDeatils = createAsyncThunk(
  'property/updatePropertyDetails',
  async (data) => {
    return axios.patch().then().catch()
  }
)
