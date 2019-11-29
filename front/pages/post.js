import React from 'react';
import {useSelector} from 'react-redux';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { LOAD_POST_REQUEST } from '../reducers/post';


const Post = ({id}) => {
    const {singlePost} = useSelector(state => state.Post);
    return (
        <>
        <Helmet 
            title={`${singlePost.User.nickname}님의 글입니다.`}
            description={singlePost.content}
            meta={[{
                name: 'description', content: singlePost.content
            },{
                property: 'op.title', content: `${singlePost.User.nickname}님의 게시글입니다.` 
            },{
                property: 'op.description', content: singlePost.content
            },{
                property: 'op.img', content: singlePost.Images[0] && `http://localhost:3065/${singlePost.Images[0].src}`
            },{
                property: 'op.url', content: `http://localhost:1103/post/${id}`
            }]}
        />
        <div>{singlePost.content}</div>
        <div>{singlePost.User.nickname[0]}</div>
        <div>
            {singlePost.Images[0] && <img src={`http://localhost:3065/${singlePost.Images[0].src}`} />}
        </div>
        </>
    )
}

Post.getInitialProps = async ( context ) => {
    context.store.dispatch({
        type: LOAD_POST_REQUEST,
        data: context.query.id
    });
    return { id: parseInt(context.query.id, 10)}
};

Post.propTypes = {
    id: PropTypes.number.isRequired
}

export default Post;
