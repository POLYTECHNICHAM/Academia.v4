package com.ressource;


import com.Entities.Wallmessage;
import com.service.WallmessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.net.URISyntaxException;
import java.util.List;

@RestController
public class WallmessageResource {
  @Autowired
  private WallmessageService wallmessageService;

  @GetMapping("/wallMessage")
  public List<Wallmessage> getWallMessage() {
    return wallmessageService.getWallMessage();
  }

  @PostMapping("/wallMessage")
  public Wallmessage postWallMessage(@RequestBody Wallmessage wallmessage) throws URISyntaxException {
    return wallmessageService.postWallMessage(wallmessage);
  }

  @DeleteMapping("/wallMessage/{id}")
  public void deletePerson(@PathVariable Integer id) throws URISyntaxException {
    wallmessageService.deleteWallMessage(id);
  }


}
