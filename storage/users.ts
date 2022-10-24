import type { IUser } from "interfaces/user";
import emmaImage from '../public/emma-image.jpeg'
const MockUsers: IUser[] = [
  {
    username: 'moforemmanuel',
    firstName: 'Mofor',
    lastName: 'Emmanuel',
    age: 24,
    contributions_count: 42,
    edited_tools: 14,
    profile_picture: emmaImage.src
  },
  {
    username: 'test-user-1',
    firstName: 'Test',
    lastName: 'User 1',
    age: 23,
    contributions_count: 36,
    edited_tools: 9,
    profile_picture: ''
  },
  {
    username: 'test-user-2',
    firstName: 'Test',
    lastName: 'User 2',
    age: 25,
    contributions_count: 37,
    edited_tools: 10,
    profile_picture: ''
  },
  {
    username: 'test-user-3',
    firstName: 'Test',
    lastName: 'User 3',
    age: 20,
    contributions_count: 30,
    edited_tools: 9,
    profile_picture: ''
  },
  {
    username: 'test-user-4',
    firstName: 'Test',
    lastName: 'User 4',
    age: 20,
    contributions_count: 33,
    edited_tools: 7,
    profile_picture: ''
  },
  {
    username: 'test-user-5',
    firstName: 'Test',
    lastName: 'User 5',
    age: 20,
    contributions_count: 22,
    edited_tools: 7,
    profile_picture: ''
  },
  {
    username: 'test-user-6',
    firstName: 'Test',
    lastName: 'User 6',
    age: 20,
    contributions_count: 29,
    edited_tools: 7,
    profile_picture: ''
  },
  {
    username: 'test-user-7',
    firstName: 'Test',
    lastName: 'User 7',
    age: 20,
    contributions_count: 32,
    edited_tools: 7,
    profile_picture: ''
  },
  {
    username: 'test-user-8',
    firstName: 'Test',
    lastName: 'User 8',
    age: 20,
    contributions_count: 23,
    edited_tools: 7,
    profile_picture: ''
  },
  {
    username: 'test-user-9',
    firstName: 'Test',
    lastName: 'User 9',
    age: 20,
    contributions_count: 21,
    edited_tools: 7,
    profile_picture: ''
  }
]

export {MockUsers}