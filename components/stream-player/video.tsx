"use client"

import { ConnectionState, Track} from "livekit-client";
import {
    useConnectionState,
    useRemoteParticipant,
    useTracks
} from "@livekit/components-react"

interface VideoProps {
    hostName: string
    hostIdentity: string
}

const Video = ({ hostName, hostIdentity }: VideoProps) => {
    const connectionState = useConnectionState();
    const participant = useRemoteParticipant(hostIdentity);
    const tracks = useTracks([
        Track.Source.Camera,
        Track.Source.Microphone
    ]).filter((track) => track.participant.identity === hostIdentity);

    let content;

    if (!participant && connectionState === ConnectionState.Connected) {
        content = <p>Host if offline</p>;
    } else if (!participant || tracks.length === 0) {
        content = <p>Connecting...</p>;
    } else {
        content = <p>Live Video</p>
    }
  return ( 
    <div className="aspec-video border-b group relative">
        {content}
    </div>
  )
}

export default Video