package com.wantasbaya.uhung_aprendamos_miskito;

import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;

import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;

import android.provider.MediaStore;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageButton;
import android.widget.ImageView;

import static android.app.Activity.RESULT_OK;


public class pestana3 extends Fragment {

    ImageView imagen;

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment






        return inflater.inflate(R.layout.fragment_pestana3, container, false);
    }

     public interface OnFragmentInteractionListener {
    }


}
