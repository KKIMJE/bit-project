package com.bitproject;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@EnableTransactionManagement // 애노테이션으로 트랜잭션을 제어할 수 있게 한다.
@RestController
@SpringBootApplication
public class App {

  public static void main(String[] args) {
    SpringApplication.run(App.class, args);   // springApplication 클래스의 run 메서드를 호출하는 것! App.class에서 .class는 확장자가 아니라 APP이라는 클래스의(자바에서 제공하는) 내장변수임! class 변수에는 해당 클래스의 정보가 들어가있다. //App이라는 클래스는 SpringApplication이라는 외부 라이브러리를 사용하는 것! ctrl 누른채로 SpringApplication 클릭하면 이 위치로 간다! 
    // 스프링부트가 객체를 만든다! 따라서 App.java를 실행하면 ContactController.java에 있는 "ContactController() 호출됨!"이게 출력됨
  }

  //@Bean
  public CommandLineRunner commandLineRunner(ApplicationContext beanContainer) {
    return args -> {

      System.out.println("빈 컨테이너가 생성한 객체(빈 컨테이너에 들어 있는 객체):");

      String[] beanNames = beanContainer.getBeanDefinitionNames();
      for (int i = 0; i < beanNames.length; i++) {
        Object bean = beanContainer.getBean(beanNames[i]);
        System.out.printf("----> %03d: %s\n", i + 1, bean.getClass().getName());
      }

    };
  }


  @RequestMapping("/hello")
  String hello() {
    return "Hello World!";
  }

}

