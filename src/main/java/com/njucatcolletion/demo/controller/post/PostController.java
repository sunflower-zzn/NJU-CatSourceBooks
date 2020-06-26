package com.njucatcolletion.demo.controller.post;

import com.njucatcolletion.demo.po.PostImg;
import com.njucatcolletion.demo.service.post.PostImgService;
import com.njucatcolletion.demo.service.post.PostService;
import com.njucatcolletion.demo.service.qcoloud.QcloudService;
import com.njucatcolletion.demo.vo.PostVO;
import com.njucatcolletion.demo.vo.ResponseVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpSession;

@RestController
@RequestMapping("catcollection/api/post")
public class PostController {

    @Autowired
    PostService postService;
    @Autowired
    QcloudService qcloudService;
    @Autowired
    PostImgService postImgService;

    @PostMapping("/new")
    ResponseVO post(@RequestBody PostVO postVO){
        postVO.initId();
        return postService.post(postVO);
    }

    @PostMapping("/{id}/addImg")
    ResponseVO addPostImg(@PathVariable String id, @RequestBody MultipartFile file, HttpSession session){
        String url = qcloudService.uploadImg(file,session);
        PostImg postImg = new PostImg();
        postImg.setId(id);
        postImg.setImgUrl(url);
        int result = postImgService.add(postImg);
        if(result == 0)return ResponseVO.buildFailure("更新图片失败");
        return postService.getById(id);
    }


    @PostMapping("/delete")
    ResponseVO delete(@RequestParam String postid, @RequestParam String openid){
        return postService.delete(postid,openid);
    }

    @GetMapping("/all")
    ResponseVO all(){
        return postService.all();
    }

    @PostMapping("/{id}/like")
    ResponseVO like(@PathVariable String id){
        return postService.like(id);
    }

}
