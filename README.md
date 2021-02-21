# homebridge-presence

[Homebridge](https://github.com/nfarina/homebridge) plugin that senses home/room occupancy based on a combination of different signals.

Detecting when people are present in a home or room is the key to automation. Rather than having to speak commands or press buttons to toggle lights, they can turn on and off automatically as you enter or move around within your home. Instead of setting up a schedule to always turn on the heat at a specific time in the morning, you can make it happen only when you leave your bedroom, even if you chose to wake up early or late that day. Besides being more convenient, this saves energy.

Unfortunately, despite decades of masters and PhD theses on the subject, granular indoor positioning is not yet feasible. There's no good way to perform WiFi triangulation/trilateration using standard unmodified routers and phones. Beacon networks similarly require too much set-up and lack standard APIs.

There are several existing Homebridge plugins that try to provide some approximation of presence. For example, [homebridge-automation-bluetooth-presence](https://github.com/paolotremadio/homebridge-automation-bluetooth-presence) creates motion sensors that activate when a Bluetooth device enters scanning range of the machine running Homebridge, and deactivate some time after the device stops appearing in scans. The [homebridge-network-presence](https://github.com/nitaybz/homebridge-network-presence) and [homebridge-people](https://github.com/PeteLawrence/homebridge-people) plugins similarly sense when devices enter or leave your home network.

Without serious work, e.g. to set up multiple overlapping WiFi networks, these plugins only give you whole-home presence. So you can turn off the lights ten minutes after everyone leaves home, but anything more useful than that won't work reliably.

The goal of `homebridge-presence` is to combine signals from multiple sources, including Bluetooth RSSI, WiFi signal strength, GPS, and motion sensors to provide a better real-time estimate of where people are within a home.
