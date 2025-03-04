document.querySelector("section").classList.add("featured");
const posts = document.querySelector(".posts");

const article = document.createElement("article");

article.innerHTML = `<img
src="./images/paul-gilmore-unsplash.jpg"
alt="Image of a mountain in front of a lake."
/>
<h3>Stop Planning</h3>
<p>
You -- yes you! You're an over-planner, I can tell. It's time to stop
planning so much and instead focusing on relaxing. Taking a break at all is
so stressful these days; why add to the stress by overworking yourself?
</p>
<aside>
<p>
<span><strong>Read Time:</strong> 4 Minutes</span
><a href="#">Read more...</a>
</p>
</aside>`

posts.appendChild(article);

posts.querySelector("article").nextSibling.nextSibling.after(posts.querySelector("article"));

document.querySelector("li").remove();

document.querySelector("span").remove();

posts.lastChild.remove();

const postTitleCollection = document.querySelectorAll("h3");

for (let postTitle of postTitleCollection) {
    postTitle.remove();
}