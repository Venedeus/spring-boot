package com.epam.selfstudy.spring;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HelloController {
    @RequestMapping("/hello")
    public String showHelloWorld(){
        return "hello-world";
    }
}
