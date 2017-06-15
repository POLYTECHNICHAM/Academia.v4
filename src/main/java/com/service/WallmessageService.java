package com.service;

import com.Entities.Wallmessage;
import com.repository.WallmessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;


@Service
@Transactional
public class WallmessageService {

    @Autowired
    private WallmessageRepository wallmessageRepository;

    public List<Wallmessage> getWallMessage()
    {
        List<Wallmessage> messagesList = new ArrayList<>();
        wallmessageRepository.findAll().forEach(messagesList::add);
        return messagesList;
    }

    public Wallmessage postWallMessage(Wallmessage wallmessage)
      {

        return wallmessageRepository.save(wallmessage);
    }

    public void deleteWallMessage(Integer id)
      {
        wallmessageRepository.delete(id);
    }
}
