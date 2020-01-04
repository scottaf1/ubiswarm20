/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBlog = `subscription OnCreateBlog {
  onCreateBlog {
    id
    name
    posts {
      nextToken
    }
  }
}
`;
export const onCreateComment = `subscription OnCreateComment {
  onCreateComment {
    content
    id
    post {
      id
      title
    }
  }
}
`;
export const onCreatePost = `subscription OnCreatePost {
  onCreatePost {
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
export const onCreateUbiswarmdbcasesProd = `subscription OnCreateUbiswarmdbcasesProd($CaseId: Int, $VertId: String) {
  onCreateUbiswarmdbcasesProd(CaseId: $CaseId, VertId: $VertId) {
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
export const onDeleteBlog = `subscription OnDeleteBlog {
  onDeleteBlog {
    id
    name
    posts {
      nextToken
    }
  }
}
`;
export const onDeleteComment = `subscription OnDeleteComment {
  onDeleteComment {
    content
    id
    post {
      id
      title
    }
  }
}
`;
export const onDeletePost = `subscription OnDeletePost {
  onDeletePost {
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
export const onDeleteUbiswarmdbcasesProd = `subscription OnDeleteUbiswarmdbcasesProd($CaseId: Int, $VertId: String) {
  onDeleteUbiswarmdbcasesProd(CaseId: $CaseId, VertId: $VertId) {
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
export const onUpdateBlog = `subscription OnUpdateBlog {
  onUpdateBlog {
    id
    name
    posts {
      nextToken
    }
  }
}
`;
export const onUpdateComment = `subscription OnUpdateComment {
  onUpdateComment {
    content
    id
    post {
      id
      title
    }
  }
}
`;
export const onUpdatePost = `subscription OnUpdatePost {
  onUpdatePost {
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
export const onUpdateUbiswarmdbcasesProd = `subscription OnUpdateUbiswarmdbcasesProd($CaseId: Int, $VertId: String) {
  onUpdateUbiswarmdbcasesProd(CaseId: $CaseId, VertId: $VertId) {
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
