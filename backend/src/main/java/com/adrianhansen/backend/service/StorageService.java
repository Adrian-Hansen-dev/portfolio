package com.adrianhansen.backend.service;

import com.adrianhansen.backend.entitiy.ObjectData;
import com.adrianhansen.backend.repository.ObjectDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.Optional;

@Service
public class StorageService {

    private final ObjectDataRepository objectDataRepository;

    @Autowired
    public StorageService(ObjectDataRepository objectDataRepository) {
        this.objectDataRepository = objectDataRepository;
    }

    public byte[] downloadImageFromFileSystem(int objectDataId) throws IOException {
        Optional<ObjectData> objectData = objectDataRepository.findById(objectDataId);
        if(objectData.isPresent()){
            String filepath = objectData.get().getFilePath();
            return Files.readAllBytes(new File(filepath).toPath());

        }
        else {
            throw(new RuntimeException("Did not find Project with id: " + objectDataId));
        }

    }
}
