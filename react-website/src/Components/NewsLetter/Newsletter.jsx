import React from 'react'
import { useState, useEffect } from 'react'
import client from '../../client'
import BlockContent from "@sanity/block-content-to-react"

const Newsletter = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        client.fetch(
            '*[_type == "post"] {title, slug, body, mainImage {asset -> {_id, url}, alt}}'
        ).then((data) => setPosts(data)).catch(console.error)
    }, [])
    return (
        <>
            <div>Newsletter</div>
            <p>You are viewing {posts.length} posts</p>
            <div>
                {posts.map((post) => (
                    <article key={post.slug.current}>
                        <img src={post.mainImage.asset.url} alt={post.title} />
                        <h4>{post.title}</h4>
                        <BlockContent blocks={post.body} projectId="dktsl6v1" dataset="production"></BlockContent>
                    </article>
                ))}
            </div>
        </>
    )
}

export default Newsletter