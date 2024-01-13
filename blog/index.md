---
title: "Blog"
description: "Updates from the Stockfish team"
date: 2024-01-01
---

# Blog

Updates from the Stockfish team

<script setup>
import { data as posts } from '/blog/posts.data.js'
import { withBase } from 'vitepress'

const sorted_posts = posts.sort((a,b) => new Date(b.date) - new Date(a.date));
console.log(sorted_posts)
</script>

<div v-for="p in sorted_posts">
    <a :href="withBase(p.url)"><h2>{{p.title}}</h2></a>
    <p>{{p.description}}</p>
    <p>{{ p.date }}</p>
</div>
