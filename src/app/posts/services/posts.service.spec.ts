import { TestBed } from '@angular/core/testing';

import { PostsService } from './posts.service';

xdescribe('PostsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostsService = TestBed.get(PostsService);
    expect(service).toBeTruthy();
  });
});
