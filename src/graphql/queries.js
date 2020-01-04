/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBlog = `query GetBlog($id: ID!) {
  getBlog(id: $id) {
    id
    name
    posts {
      nextToken
    }
  }
}
`;
export const getComment = `query GetComment($id: ID!) {
  getComment(id: $id) {
    content
    id
    post {
      id
      title
    }
  }
}
`;
export const getPost = `query GetPost($id: ID!) {
  getPost(id: $id) {
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
export const getUbiswarmdbcasesProd = `query GetUbiswarmdbcasesProd($CaseId: Int!, $VertId: String!) {
  getUbiswarmdbcasesProd(CaseId: $CaseId, VertId: $VertId) {
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
export const listBlogs = `query ListBlogs(
  $filter: ModelBlogFilterInput
  $limit: Int
  $nextToken: String
) {
  listBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
    }
    nextToken
  }
}
`;
export const listComments = `query ListComments(
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      content
      id
    }
    nextToken
  }
}
`;
export const listPosts = `query ListPosts(
  $filter: ModelPostFilterInput
  $limit: Int
  $nextToken: String
) {
  listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
    }
    nextToken
  }
}
`;
export const listUbiswarmdbcasesProds = `query ListUbiswarmdbcasesProds(
  $filter: TableUbiswarmdbcasesProdFilterInput
  $limit: Int
  $nextToken: String
) {
  listUbiswarmdbcasesProds(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
  }
}
`;
export const queryUbiswarmdbcasesProdsByVertidindex = `query QueryUbiswarmdbcasesProdsByVertidindex(
  $VertId: String!
  $after: String
  $first: Int
) {
  queryUbiswarmdbcasesProdsByVertidindex(
    VertId: $VertId
    after: $after
    first: $first
  ) {
    items {
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
    nextToken
  }
}
`;
