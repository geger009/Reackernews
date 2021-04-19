import axios from 'axios'
import { STORY_LENGTH } from './helper'

export const getStory = async (id) => {
  try {
    const story = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
    return story
  } catch (error) {
    console.log('Something error while getting story', error)
  }
}

export const getStories = async (type, page) => {
  try {
    const { data: storyIds } = await axios.get(
      `https://hacker-news.firebaseio.com/v0/${type}stories.json`
    )
    const totalPage = Math.ceil(storyIds.length / STORY_LENGTH)
    const stories = await Promise.all(storyIds.slice((STORY_LENGTH * (page - 1)), (STORY_LENGTH * page)).map(getStory))
    return { totalPage, stories }
  } catch (error) {
    console.log('Error while getting list of stories.', error)
  }
}

// Get user detail
export const getUserDetail = async (id) => {
  try {
    const { data: userDetail } = await axios.get(
      `https://hacker-news.firebaseio.com/v0/user/${id}.json`
    )
    return userDetail
  } catch (error) {
    console.log('Error while getting user detail.', error)
  }
}