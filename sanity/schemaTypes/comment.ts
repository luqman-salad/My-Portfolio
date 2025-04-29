const comment = {
    name: 'comment',
    title: 'comment',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string',
        },
        {
            name: 'comment',
            title: 'Comment',
            type: 'text',
        },
        {
            name: 'approved',
            title: 'Approved',
            type: 'boolean',
            description: 'Only approved comments are visible on the site'
        },
        {
            name: 'post',
            title: 'Post',
            type: 'reference',
            to: [{type: 'post'}],
        },

        

    ],
};


export default comment;