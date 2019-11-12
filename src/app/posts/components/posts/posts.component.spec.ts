import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { PostsComponent } from './posts.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { CommentsService } from '../../services/comments.service';
import { ModalService } from '../../../shared/services/modal.service';

// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { PostsComponent } from './posts.component';

// describe('PostsComponent', () => {
//   let component: PostsComponent;
//   let fixture: ComponentFixture<PostsComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [PostsComponent]
//     }).compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(PostsComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

// describe('PostsComponent', () => {
//   let component: PostsComponent;
//   let fixture: ComponentFixture<PostsComponent>;

//   beforeEach(async () => {
//     TestBed.configureTestingModule({
//       declarations: [PostsComponent],
//       providers: [
//         { provide: PostsService, useValue: PostsServiceStub },
//         { provide: CommentsService, useValue: CommentsServiceStub },
//         { provide: ModalService, useValue: ModalServiceStub }
//       ],
//       schemas: [CUSTOM_ELEMENTS_SCHEMA]
//     }).compileComponents();
//     fixture = TestBed.createComponent(PostsComponent);
//     component = fixture.debugElement.componentInstance;
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

const PostsServiceStub = {};
const CommentsServiceStub = {};
const ModalServiceStub = {};

describe('PostsComponent', () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;
  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [PostsComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: PostsService, useValue: PostsServiceStub },
        { provide: ModalService, useValue: ModalServiceStub },
        { provide: CommentsService, useValue: CommentsServiceStub }
      ]
    }).compileComponents();
  });

  it('should create', () => {
    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should have getPosts and clearPosts button', () => {
    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    const getPostsBtnElement: HTMLElement = fixture.nativeElement.querySelector(
      '.btnGetPosts'
    );
    expect(getPostsBtnElement).toBeTruthy();

    const clearPostsBtnElement: HTMLElement = fixture.nativeElement.querySelector(
      '.btnClearPosts'
    );
    expect(clearPostsBtnElement).toBeTruthy();
  });

  it('should display posts list if you click getPosts button', () => {});
});
