/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBlog = `mutation CreateBlog(
  $condition: ModelBlogConditionInput
  $input: CreateBlogInput!
) {
  createBlog(condition: $condition, input: $input) {
    id
    name
    posts {
      nextToken
    }
  }
}
`;
export const createComment = `mutation CreateComment(
  $condition: ModelCommentConditionInput
  $input: CreateCommentInput!
) {
  createComment(condition: $condition, input: $input) {
    content
    id
    post {
      id
      title
    }
  }
}
`;
export const createPost = `mutation CreatePost(
  $condition: ModelPostConditionInput
  $input: CreatePostInput!
) {
  createPost(condition: $condition, input: $input) {
    blog {
      id
      name
    }
    comments {
      nextToken
    }
    id
    title
  }
}
`;
export const createUbiswarmdbcasesProd = `mutation CreateUbiswarmdbcasesProd($input: CreateUbiswarmdbcasesProdInput!) {
  createUbiswarmdbcasesProd(input: $input) {
    CaseId
    VertId
    apiid
    casecontributors
    caseowner
    casesource
    casestatus
    casesteps
    casesummary
    casesymptom
    casetype
    complexity
    createdat
    customercontact
    customeremail
    customerimpact
    images
    kbdoc
    prevention
    priority
    productmanufacturer
    resolution
    rootcause
    solveddate
    subtypea
    subtypeb
    swarmteam
    updatedat
  }
}
`;
export const deleteBlog = `mutation DeleteBlog(
  $condition: ModelBlogConditionInput
  $input: DeleteBlogInput!
) {
  deleteBlog(condition: $condition, input: $input) {
    id
    name
    posts {
      nextToken
    }
  }
}
`;
export const deleteComment = `mutation DeleteComment(
  $condition: ModelCommentConditionInput
  $input: DeleteCommentInput!
) {
  deleteComment(condition: $condition, input: $input) {
    content
    id
    post {
      id
      title
    }
  }
}
`;
export const deletePost = `mutation DeletePost(
  $condition: ModelPostConditionInput
  $input: DeletePostInput!
) {
  deletePost(condition: $condition, input: $input) {
    blog {
      id
      name
    }
    comments {
      nextToken
    }
    id
    title
  }
}
`;
export const deleteUbiswarmdbcasesProd = `mutation DeleteUbiswarmdbcasesProd($input: DeleteUbiswarmdbcasesProdInput!) {
  deleteUbiswarmdbcasesProd(input: $input) {
    CaseId
    VertId
    apiid
    casecontributors
    caseowner
    casesource
    casestatus
    casesteps
    casesummary
    casesymptom
    casetype
    complexity
    createdat
    customercontact
    customeremail
    customerimpact
    images
    kbdoc
    prevention
    priority
    productmanufacturer
    resolution
    rootcause
    solveddate
    subtypea
    subtypeb
    swarmteam
    updatedat
  }
}
`;
export const updateBlog = `mutation UpdateBlog(
  $condition: ModelBlogConditionInput
  $input: UpdateBlogInput!
) {
  updateBlog(condition: $condition, input: $input) {
    id
    name
    posts {
      nextToken
    }
  }
}
`;
export const updateComment = `mutation UpdateComment(
  $condition: ModelCommentConditionInput
  $input: UpdateCommentInput!
) {
  updateComment(condition: $condition, input: $input) {
    content
    id
    post {
      id
      title
    }
  }
}
`;
export const updatePost = `mutation UpdatePost(
  $condition: ModelPostConditionInput
  $input: UpdatePostInput!
) {
  updatePost(condition: $condition, input: $input) {
    blog {
      id
      name
    }
    comments {
      nextToken
    }
    id
    title
  }
}
`;
export const updateUbiswarmdbcasesProd = `mutation UpdateUbiswarmdbcasesProd($input: UpdateUbiswarmdbcasesProdInput!) {
  updateUbiswarmdbcasesProd(input: $input) {
    CaseId
    VertId
    apiid
    casecontributors
    caseowner
    casesource
    casestatus
    casesteps
    casesummary
    casesymptom
    casetype
    complexity
    createdat
    customercontact
    customeremail
    customerimpact
    images
    kbdoc
    prevention
    priority
    productmanufacturer
    resolution
    rootcause
    solveddate
    subtypea
    subtypeb
    swarmteam
    updatedat
  }
}
`;
