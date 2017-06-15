package com.ressource;


import com.Entities.Depositbox;
import com.service.DepositboxService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URISyntaxException;
import java.util.List;

//import org.springframework.security.access.annotation.Secured;

@RestController
public class DepositBoxResource {

  @Autowired
    private DepositboxService depositboxService;

    @GetMapping("/depositboxs")
    public List<Depositbox> getDepositBox() {
      return depositboxService.getDepositBox();
    }

    @PostMapping("/depositboxs")
    public Depositbox postDepositbox(@PathVariable Depositbox depositbox) throws URISyntaxException {

        return depositboxService.postDepositbox(depositbox);
    }


   /* @PutMapping("/depositboxs")
    //@Secured(AuthoritiesConstants.ADMIN) *//*Qui on veut*//*
    public ResponseEntity<Depositbox> updateDepositbox(@PathVariable Depositbox depositbox) throws URISyntaxException {
        Depositbox depositboxUpdate;
        depositboxUpdate=depositboxService.updateDepositbox(depositbox);
        if(depositbox==depositboxUpdate){
            return ResponseEntity.ok().body(depositboxUpdate);
        }else {
            return ResponseEntity.badRequest().body(null); //A changer, il faut créer divers réponses pas le temps
        }


    }*/


    @DeleteMapping("/depositboxs/{id}")
    public void deleteDepositbox(@PathVariable Integer id) throws URISyntaxException {
      depositboxService.deleteDepositbox(id);

    }


}
