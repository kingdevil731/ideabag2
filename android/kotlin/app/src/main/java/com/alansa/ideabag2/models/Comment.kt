package com.alansa.ideabag2.models

data class Comment(val id: String, val author: String, val comment: String, val created: Long) {
    fun toMap() = hashMapOf("author" to author, "comment" to comment, "created" to created)
}