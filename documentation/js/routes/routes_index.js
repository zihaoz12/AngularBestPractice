var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"routes","filename":"src/app/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"home","component":"HomeComponent"},{"path":"posts","loadChildren":"./posts/posts.module#PostsModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/posts/postsRouting.module.ts","module":"PostsRoutingModule","children":[{"path":"","component":"PostsComponent"}],"kind":"module"}],"module":"PostsModule"}]},{"path":"","redirectTo":"/home","pathMatch":"full"},{"path":"**","component":"PageNotFundComponent"}],"kind":"module"}]}