package com.service;
// modifié par anis le 02/05/2017
import com.Entities.Depositbox;
import com.repository.DepositboxRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;


@Service
@Transactional
public class DepositboxService {
  @Autowired
    private DepositboxRepository depositboxRepository;

    public List<Depositbox> getDepositBox()
    {
      List<Depositbox> depositsList = new ArrayList<>();
      depositboxRepository.findAll().forEach(depositsList::add);
      return depositsList;
    }

    public Depositbox postDepositbox(Depositbox depositbox){

        return depositboxRepository.save(depositbox);
    }

/*    public Depositbox updateDepositbox(Depositbox depositbox){

        return depositboxRepository.findOneById(depositbox.getId());
    }*/

    public void deleteDepositbox(Integer id){

      depositboxRepository.delete(id);
    }
}
