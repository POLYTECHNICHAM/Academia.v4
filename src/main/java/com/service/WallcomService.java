package com.service;

import com.Entities.Wallcom;
import com.repository.WallcomRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
@Transactional
public class WallcomService {

    private WallcomRepository WallcomRepository;

    public Wallcom createWallcom(Wallcom Wallcom){

        return WallcomRepository.save(Wallcom);
    }

    public Wallcom updateWallcom(Wallcom Wallcom){

        return WallcomRepository.findOneById(Wallcom.getId());
    }

    public void deleteWallcom(Wallcom Wallcom){

        WallcomRepository.delete(Wallcom);
    }
}
