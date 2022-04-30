package com.bitproject.controller;

import java.time.LocalDateTime;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.bitproject.dao.ChatRepository;
import com.bitproject.domain.Chat;
import lombok.RequiredArgsConstructor;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import reactor.core.scheduler.Schedulers;

@RequiredArgsConstructor
@RestController
public class ChatController {

  private final ChatRepository chatRepository;

  // 귓속말할 때 사용
  @CrossOrigin
  @GetMapping(value = "/sender/{sender}/receiver/{receiver}", produces = MediaType.TEXT_EVENT_STREAM_VALUE) // SSE 프로토콜(Response를 안끊기고 유지해준다.)
  public Flux<Chat> getMsg(@PathVariable String sender, @PathVariable String receiver) {
    return chatRepository.mFindBySender(sender, receiver)
        .subscribeOn(Schedulers.boundedElastic());
  }

  @CrossOrigin
  @GetMapping(value = "/chat/roomNum/{roomNum}", produces = MediaType.TEXT_EVENT_STREAM_VALUE)
  public Flux<Chat> findByRoomNum(@PathVariable Integer roomNum) {
    return chatRepository.mFindByRoomNum(roomNum)
        .subscribeOn(Schedulers.boundedElastic());
  }

  @CrossOrigin
  @PostMapping("/chat") 
  public Mono<Chat> setMsg(@RequestBody Chat chat){ // Mono: 데이터를 한번만 리턴한다. save한 데이터가 잘 들어갔는지 보고싶어서 쓴 것.
    chat.setCreatedAt(LocalDateTime.now());
    return chatRepository.save(chat); // Object를 리턴하면 자동으로 JSON 변환 (MessageConverter)
  }

}
