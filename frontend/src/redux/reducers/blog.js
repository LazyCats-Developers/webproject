import {
    GET_BLOG_LIST_SUCCESS,
    GET_BLOG_LIST_FAIL,
    GET_BLOG_LIST_CATEGORIES_SUCCESS,
    GET_BLOG_LIST_CATEGORIES_FAIL,
    GET_BLOG_SUCCESS,
    GET_BLOG_FAIL,
    GET_SEARCH_BLOG_SUCCESS,
    GET_SEARCH_BLOG_FAIL
}from '../actions/blog/types';

const initialState = {
    blog_list: null,
    blog_list_category: null,
    filtered_post: null,
    post: null,
    count: null,
    next: null,
    next: null,
    previous: null
}

export default function blog(state = initialState, action){
    const { type, payload } = action;

    switch (type) {
        //Lista de blogs: api/blog/list
        case GET_BLOG_LIST_SUCCESS:
            return {
                ...state,
                blog_list: payload.results.post,
                count: payload.count,
                next: payload.next,
                previous: payload.previous,
            }
            break;
        case GET_BLOG_LIST_FAIL:
            return {
                ...state,
                blog_list: null,
                count: null,
                next: null,
                previous: null,
            }
            break;
        //Blog especifico: api/blog/detail/*
        case GET_BLOG_SUCCESS:
            return {
                ...state,
               post: payload.post
            }
            break;
        case GET_BLOG_FAIL:
            return {
                ...state,
               post: null
            }
            break;
        //Listar blog por categoria: api/blog/by_category?slug=
        case GET_BLOG_LIST_CATEGORIES_SUCCESS:
            return {
                ...state,
                blog_list_category: payload.results.post,
                count: payload.count,
                next: payload.next,
                previous: payload.previous,
            }
            break;
        case GET_BLOG_LIST_CATEGORIES_FAIL:
            return {
                ...state,
                blog_list_category: null,
                count: null,
                next: null,
                previous: null,
            }
            break;
        //Lista resultado de busqueda de blog: api/blog/search?s=
        case GET_SEARCH_BLOG_SUCCESS:
            return {
                ...state,
                filtered_post: payload.results.filtered_posts,
                count: payload.count,
                next: payload.next,
                previous: payload.previous,
            }
            break;
        case GET_SEARCH_BLOG_FAIL:
            return {
                ...state,
                filtered_post: null,
                count: null,
                next: null,
                previous: null,
            }
            break;
        default:
            return state
    }

}