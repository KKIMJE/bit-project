package com.bitproject.domain;

import java.util.List;
import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class PartyResponse {

  Party party;
  List<PartyComment> commentList;

}
