//increment

export const increment = (index) => {
  return {
    type: 'INCREMENT_LIKES',
    //identifier for which to update
    index
  }
}

//Add comment

export const addComment = (postId, author, comment)=>{
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}

//Remove comment

export const removeComment = (postId, i) => {
  return {
    type: 'REMOVE_COMMENT',
    postId,
    i
  }
}
