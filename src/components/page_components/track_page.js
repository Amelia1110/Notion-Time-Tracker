import React from 'react';
import { PlayCircleFilled } from '@ant-design/icons';
import { PauseOutlined } from '@ant-design/icons';
import { DeleteOutlined } from '@ant-design/icons';

export default function TrackPage() {
    return (
        <div className="bg-gray-400 h-full flex justify-center">
            <p className="font-serif">0:00</p>
            <div className="flex flex-row">
                <PauseOutlined/>
                <button>
                    <PlayCircleFilled/>
                </button>
                <DeleteOutlined/>
            </div>
        </div>
    );
}